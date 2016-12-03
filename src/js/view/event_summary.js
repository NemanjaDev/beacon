import Marionette from "backbone.marionette";
import ExperiencePriceView from "./experience_price";

export default Marionette.View.extend({
    tagName: 'tr',
    regions: {
        price: ".price"
    },

    onRender: function () {
        this.showChildView("price", new ExperiencePriceView({model: this.model.get('experience')}));
    }
});
