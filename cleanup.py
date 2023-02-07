import os
from threading import Timer
from datetime import datetime

#----------------------------------------------------------------------
class RepeatTimer(Timer):
    def run(self):
        while not self.finished.wait(self.interval):
            self.function(*self.args, **self.kwargs)

#----------------------------------------------------------------------
def remove(path):
    """
    Remove the file or directory
    """
    try:
        if os.path.exists(path):
            file_list = os.listdir(path)
            for filename in file_list:
                del_file_path = os.path.join(path, filename)
                print(f'{datetime.now()}  Removed :: {del_file_path}')
                os.remove(del_file_path)
    except OSError:
        print ("Unable to remove file: %s" % path)

cleanup_process = RepeatTimer(1200, remove, args=("/home/ahteshamzaidi/mysite/static/uploads",))
cleanup_process.start()