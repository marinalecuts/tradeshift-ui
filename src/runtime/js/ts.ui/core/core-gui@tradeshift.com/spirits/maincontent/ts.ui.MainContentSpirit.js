/**
 * Spirit of the main element.
 */
ts.ui.MainContentSpirit = ts.ui.Spirit.extend({

	/**
	 * Configure.
	 */
	onconfigure: function() {
		this.super.onconfigure();
		this.element.tabIndex = -1;
	},

	/**
	 * Fit.
	 */
	onready: function() {
		this.super.onready();
		this._fit(this.dom.parent());
	},

	/**
	 * Fit.
	 */
	onflex: function() {
		this.super.onflex();
		this._fit(this.dom.parent());
	},

	// Private ...................................................................

	/**
	 * @param {HTMLMainElement}
	 */
	_fit: function(main) {
		this.css.height = main.scrollHeight;
	}
});
