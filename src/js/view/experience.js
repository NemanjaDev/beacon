import Marionette from "backbone.marionette";
import moment from 'moment';
import 'moment-duration-format';

/**
 * @param {model} Experience
 */
export default Marionette.View.extend({
    modelEvents: {
        'change:duration': 'render',
        'change:name': 'render',
    },

    templateContext() {
        const duration = this.model.get('duration');
        window.moment = moment;

        return {
            duration: moment.duration(duration, 'minutes').format('h[hr] m[min]')
        }
    }
});
