Ext.application({
    name: 'BackgroundExt',
    launch: function() {
        		 Ext.create('Ext.container.Viewport', {
			 width: 500,
			 height: 500,
             layout: 'absolute',
			 defaults: {
						bodyStyle: 'padding:100px'
						},
             items: [
                {
                    title: 'Home',
					html: '<h3>Login</h3><form method="post"><label for="lbluname">Username:</label><input type="text" name="txtuname"></form>'
                }
            ]
        });
    }
});
