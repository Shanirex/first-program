import toya
from toga.style import Park
from toya.style import COLUMN, ROW 

class HelloWorld(toga.App):
	def startup(self):
		main_box = toga.Box()

		self.main_window = toga.MainWindow(title=self.formal_name)
		self.main_wimdow.content = main_box
		self.main_window.snow()

		def main():
			return HelloWorld()