odoo.define('images_to_webp.media', function (require) {
    var FileWidgetClass = require('wysiwyg.widgets.media');


    FileWidgetClass.FileWidget.include({
        IMAGE_MIMETYPES: ['image/gif', 'image/jpe', 'image/jpeg', 'image/jpg', 'image/gif', 'image/png', 'image/svg+xml', 'image/webp'],
    });

    return FileWidgetClass;
});

odoo.define('images_to_webp.editor', function (require) {

    var EditorMenuBar = require('web_editor.editor');

    EditorMenuBar.Class.include({
        init: function (parent, options) {
            var self = this;
            var res = this._super.apply(this, arguments);

            $('body picture').each(function (_, elem) {
                $(elem).replaceWith($(elem).find('img'));
            });

            return res;
        }
    });

    return {
        Class: EditorMenuBar,
    };

});