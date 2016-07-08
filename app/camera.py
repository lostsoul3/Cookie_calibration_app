import cv2

class ImageCapture(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)

    def __del__(self):
        self.video.release()
    
    def get_frame(self):
	global success
        success, image = self.video.read()
        #ret, jpeg = cv2.imencode('.jpg', image)
        #return jpeg.tobytes()
	return success , image

    def get_success(self):
	return success
