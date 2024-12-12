var r = function (e, n) {
        switch (e) {
            case 'P':
                return n.date({ width: 'short' });
            case 'PP':
                return n.date({ width: 'medium' });
            case 'PPP':
                return n.date({ width: 'long' });
            default:
                return n.date({ width: 'full' });
        }
    },
    i = function (e, n) {
        switch (e) {
            case 'p':
                return n.time({ width: 'short' });
            case 'pp':
                return n.time({ width: 'medium' });
            case 'ppp':
                return n.time({ width: 'long' });
            default:
                return n.time({ width: 'full' });
        }
    },
    a = function (e, n) {
        var a,
            s = e.match(/(P+)(p+)?/) || [],
            o = s[1],
            l = s[2];
        if (!l) return r(e, n);
        switch (o) {
            case 'P':
                a = n.dateTime({ width: 'short' });
                break;
            case 'PP':
                a = n.dateTime({ width: 'medium' });
                break;
            case 'PPP':
                a = n.dateTime({ width: 'long' });
                break;
            default:
                a = n.dateTime({ width: 'full' });
        }
        return a.replace('{{date}}', r(o, n)).replace('{{time}}', i(l, n));
    },
    s = {
        p: i,
        P: a
    };
n.Z = s;
