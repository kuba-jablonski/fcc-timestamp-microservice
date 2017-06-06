const moment = require('moment');

const formats = [
    'DD-MM-YYYY',
    'YYYY-MM-DD',
    'MMMM-Do-YYYY',
    'DD-MM-YY',
    'X'
]

module.exports = makeTimestamp = (time, format = formats) => {
    let t = moment(time, format);
    if (moment(t).isValid()) {
        return {
            unix: Number(moment(t).format('X')),
            natural: moment(t).format('MMMM Do, YYYY')
        };
    } else {
        return {
            unix: null,
            natural: null
        }
    }
}
