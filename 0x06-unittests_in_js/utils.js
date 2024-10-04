const Utils = {
    calculateNumber(type, a, b) {
        if (type === 'SUM') {
            return Math.round(a) + Math.round(b);
        } else if (type === 'SUBTRACT') {
            return Math.round(a) - Math.round(b);
        } else if (type === 'DIVIDE') {
            if (Math.round(b) === 0) {
                return 'Error';
            } else if (Math.round(a) === 0) {
                return 0;
            }
            return Math.round(a) / Math.round(b);
        }
    },
}

module.exports = Utils;