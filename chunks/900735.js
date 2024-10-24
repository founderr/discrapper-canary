var i = n(699516),
    a = n(70956),
    s = n(869031);
let r = 2 * a.Z.Millis.WEEK,
    l = 4 * a.Z.Millis.WEEK;
t.Z = {
    isEligibleForNotice: () => {
        let e = i.Z.getSinces();
        return (
            !!Object.keys(e).some((t) => {
                let n = Date.now() - Date.parse(e[t]);
                return i.Z.isBlocked(t) && n > r && n < l;
            }) && (0, s.nZ)('block_user_feedback_utils')
        );
    }
};
