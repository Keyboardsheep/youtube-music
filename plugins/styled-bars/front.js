const customTitlebar = require('custom-electron-titlebar');
const {remote, ipcRenderer} = require('electron');

module.exports = () => {
	const myBar = new customTitlebar.Titlebar({
		backgroundColor: customTitlebar.Color.fromHex('#050505'),
		itemBackgroundColor: customTitlebar.Color.fromHex('#121212')
	});
	myBar.updateTitle(' ');
	document.title = 'Youtube Music';

	ipcRenderer.on('updateMenu', function (event, menu) {
		if (menu) {
			myBar.updateMenu(remote.Menu.getApplicationMenu());
		} else {
			try {
				myBar.updateMenu(null);
			} catch (e) {
				//will always throw type error - null isn't menu, but it works
			}
		}
	});
};