var n = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: 'P'
    },
    r = function (e, t, r, i) {
        return n[e];
    };
t.Z = r;
