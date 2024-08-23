a.d(n, {
    B: function () {
        return i;
    }
});
var s = a(70956),
    t = a(689938);
let i = [
    {
        duration: 30 * s.Z.Millis.MINUTE,
        getLabel: () => t.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN
    },
    {
        duration: s.Z.Millis.HOUR,
        getLabel: () => t.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
    },
    {
        duration: 2 * s.Z.Millis.HOUR,
        getLabel: () => t.Z.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
    },
    {
        duration: 4 * s.Z.Millis.HOUR,
        getLabel: () => t.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
    }
];
