import Backbone from "backbone";
import Experience from "./experience";

export default Backbone.Model.extend({
    urlRoot: '/api/events',

    url: function() {
        return this.urlRoot + '/' + this.id;
    },

    parse: function (response, options) {
        if (!response) {
            return response;
        }

        options = options || {};
        if (!options.hasOwnProperty('timezoneOffset')) {
            options.timezoneOffset = true;
        }

        if (response.hasOwnProperty('start')) {
            response.start = new Date(response.start);

            if (options.timezoneOffset) {
                // Offset the date by the current timezone since the date is in UTC
                response.start.setMinutes(response.start.getMinutes() + response.start.getTimezoneOffset());
            }

            response.start = response.start.toLocaleTimeString();
        }

        if (response.hasOwnProperty('end')) {
            response.end = new Date(response.end);

            if (options.timezoneOffset) {
                // Offset the date by the current timezone since the date is in UTC
                response.end.setMinutes(response.end.getMinutes() + response.end.getTimezoneOffset());
            }
        }

        if (response.hasOwnProperty('experience')) {
            response.experience = new Experience(response.experience);
            response.experience.fetch();
        }

        return response;
    }
});