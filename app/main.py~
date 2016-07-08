from flask import Flask, render_template, Response, request
from camera import ImageCapture
import cv2

app = Flask(__name__)

class Server():

	def __init__(self,__name__):
		self.success = []
		self.frame = []
		self.app = Flask(__name__)
		self.imageBytes = None
		self.px = 0
		self.py = 0
		self.data = []

server = Server(__name__)

@server.app.route('/')
def start():
		return render_template('int.html')

@server.app.route('/index')
def index():
		return render_template('index2.html')

def gen(camera):
		server.data = []
		server.success , server.frame = camera.get_frame()
		ret , jpeg = cv2.imencode('.jpg',server.frame)
		return jpeg.tobytes()

@server.app.route('/image_feed')
def image_feed():
		server.imagebytes = gen(ImageCapture())
		return Response(server.imagebytes)
	
@server.app.route('/get_data', methods=['POST'])
def get_data():
		print "something"
		server.px = request.values.get('cx')
		server.py = request.values.get('cy')
		pix = server.frame[server.px,server.py]
		print pix
		server.data.append(pix)
		return 	0

@server.app.route('/datadisplay')
def datadisplay():
	value = server.data
	return render_template('gen.html',value=value)


if __name__ == '__main__':
		server.app.run(host='0.0.0.0', debug=True)






	
	


	




