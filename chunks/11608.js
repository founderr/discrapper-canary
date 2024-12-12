var r = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: 'P'
    },
    i = function (e, n, i, a) {
        return r[e];
    };
n.Z = i;
