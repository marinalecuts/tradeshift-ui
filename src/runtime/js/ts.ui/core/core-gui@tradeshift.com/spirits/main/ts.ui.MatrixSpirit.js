/**
 * Spirit of the matrix.
 */
ts.ui.MatrixSpirit = (function(CSSPlugin) {
	return ts.ui.Spirit.extend({
		/**
		 * Load the matrix and add the classname.
		 */
		onconfigure: function() {
			this.super.onconfigure();
			this.script.load(ts.ui.MatrixSpirit.edbml);
			this.css.add('ts-matrix');
		},

		onready: function() {
			this.super.onready();
			var scrollbar = gui.Client.scrollBarSize;
			['.ts-north', '.ts-east', '.ts-south'].forEach(function(cname) {
				CSSPlugin.set(this.dom.q(cname), 'right', scrollbar + 'px');
			}, this);
		}
	});
}(gui.CSSPlugin));
