from flask import Flask, request, jsonify, render_template
from flask_caching import Cache
from werkzeug.utils import secure_filename
import os
import logging
from flask_cors import CORS

from prediction import predict_image

app = Flask(__name__)
CORS(app)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler()
    ]
)

@app.route("/")
def index():
    if request.method == "GET":
        app.logger.info('index page accessed')
        return jsonify({"status":"server is healthy"}), 200

@app.route("/predict/tumor", methods=["POST"])
@cache.cached(timeout=10)
def predict():
    if request.method == "POST":
        app.logger.info('predict brain tumor page accessed')
        image = request.files["image"]

        if image:
            filename = secure_filename(image.filename)
            image_full_path = os.path.join("static/uploads", filename)
            image.save(image_full_path)

            # Load the machine learning model and use it to make predictions
            class_type, accuracy = predict_image('brain_tumor_model/', image)

            # Return the image and result as a response
            # return {"image": filename, "result": {"class":class_type, "accuracy": accuracy}},200
            return {"res" : class_type, "accuracy" : accuracy}, 200
        else:
            return {"error": "Image is required."}, 400

@app.route("/predict/pneumonia", methods=["POST"])
@cache.cached(timeout=10)
def predict_pneumonia():
    if request.method == "POST":
        app.logger.info('predict pneumonia page accessed')
        image = request.files["image"]
        # name = request.form["name"]

        if image:
            filename = secure_filename(image.filename)
            image_full_path = os.path.join("static/uploads", filename)
            image.save(image_full_path)

            # Load the machine learning model and use it to make predictions
            class_type, accuracy = predict_image('pneumonia_model/', image)

            # Return the image and result as a response
            # return {"image": filename, "result": {"class":class_type, "accuracy": accuracy}}, 200
            return {"res" : class_type, "accuracy" : accuracy}, 200

        else:
            return {"error": "Image is required."}, 400

if __name__ == "__main__":
    app.run(debug=True, port=5000)