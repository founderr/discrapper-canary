r.d(n, {
    IS: function () {
        return f;
    },
    MH: function () {
        return p;
    },
    UE: function () {
        return h;
    },
    as: function () {
        return i;
    },
    fP: function () {
        return d;
    },
    m1: function () {
        return a;
    },
    wz: function () {
        return _;
    }
});
var i,
    a,
    s = r(772848),
    o = r(146282),
    l = r(626135),
    u = r(981631),
    c = r(206583);
!(function (e) {
    (e[(e.FollowGame = 0)] = 'FollowGame'), (e[(e.UnfollowGame = 1)] = 'UnfollowGame'), (e[(e.ClickMessageUser = 2)] = 'ClickMessageUser'), (e[(e.SendMessageUser = 3)] = 'SendMessageUser'), (e[(e.JoinVC = 4)] = 'JoinVC'), (e[(e.WatchStream = 5)] = 'WatchStream'), (e[(e.ClickSimilarGame = 6)] = 'ClickSimilarGame'), (e[(e.WebsiteLink = 7)] = 'WebsiteLink'), (e[(e.XLink = 8)] = 'XLink'), (e[(e.YouTubeLink = 9)] = 'YouTubeLink'), (e[(e.ShowMore = 10)] = 'ShowMore'), (e[(e.ShowLess = 11)] = 'ShowLess'), (e[(e.JoinOfficialServer = 12)] = 'JoinOfficialServer'), (e[(e.ClickImage = 13)] = 'ClickImage');
})(i || (i = {})),
    !(function (e) {
        (e.ActivityCard = 'activity_card'), (e.ActivityCardContextMenu = 'activity_card_context_menu'), (e.UserProfile = 'user_profile'), (e.UserProfileCardContextMenu = 'user_profile_card_context_menu'), (e.SimilarGames = 'similar_games'), (e.DevTools = 'dev_tools'), (e.Embed = 'embed'), (e.RtcPanel = 'rtc_panel'), (e.FriendsActivityFeed = 'friends_activity_feed');
    })(a || (a = {}));
let d = () => (0, s.Z)(),
    f = (e) => {
        let { viewId: n, source: r, gameName: i, applicationId: a, authorId: s } = e;
        return (
            l.default.track(u.rMx.GAME_PROFILE_OPEN, {
                view_id: n,
                source: r,
                game_name: i,
                application_id: a,
                author_id: s,
                request_id: o.Z.getFeedRequestId(c.YN.GAME_PROFILE_FEED)
            }),
            n
        );
    },
    _ = (e) => {
        let { viewId: n, gameName: r, applicationId: i, playedFriendIds: a, playedFriendsData: s, similarGames: d, officialGuildId: f } = e;
        l.default.track(u.rMx.GAME_PROFILE_CLOSE, {
            view_id: n,
            game_name: r,
            application_id: i,
            played_friend_ids: a,
            played_friends_data: s,
            similar_games: d,
            request_id: o.Z.getFeedRequestId(c.YN.GAME_PROFILE_FEED),
            official_guild_id: f
        });
    },
    h = (e) => {
        let { gameName: n, applicationId: r, action: i, recipientUserId: a, similarGameId: s, viewId: o, officialGuildId: c } = e;
        l.default.track(u.rMx.GAME_PROFILE_ACTION, {
            game_name: n,
            application_id: r,
            action: i,
            recipient_user_id: a,
            similar_game_id: s,
            view_id: o,
            official_guild_id: c
        });
    },
    p = (e) => {
        let { viewId: n, applicationId: r, suggestedGameName: i, suggestedGameApplicationId: a, feedback: s, submitted: o } = e;
        return l.default.track(u.rMx.GAME_PROFILE_FEEDBACK, {
            view_id: n,
            application_id: r,
            suggested_game_name: i,
            suggested_game_application_id: a,
            feedback: s,
            submitted: o
        });
    };
