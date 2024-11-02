var i = n(544891),
    r = n(981631);
t.Z = {
    fetchTeams() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return i.tn.get({
            url: r.ANM.TEAMS,
            query: { include_payout_account_status: e }
        });
    }
};
