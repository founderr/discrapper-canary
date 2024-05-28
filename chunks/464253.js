    "use strict";
    t.r(a), t("411104");
    var d = t("570140"),
      c = t("846027"),
      n = t("872810"),
      i = t("710845"),
      f = t("252759"),
      o = t("361291"),
      r = t("199902"),
      l = t("314897"),
      s = t("569545"),
      b = t("803647"),
      u = t("981631"),
      p = t("65154");

    function h(e, a, t) {
      return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[a] = t, e
    }
    class m {
      _onGameDetectionUpdate(e) {
        this.applications = e.map(e => {
          var a, t;
          return {
            applicationId: null !== (a = e.id) && void 0 !== a ? a : null,
            processId: e.pid,
            processPath: e.pidPath,
            windowHandle: null !== (t = e.windowHandle) && void 0 !== t ? t : null,
            executableName: e.exeName
          }
        }), "verbatim-source" !== this.mode && this.director.onDetectionUpdate(this.applications)
      }
      _onStreamApplication(e, a) {
        this.mode = "application", this.streamKey = e, this.director.onStreamBegin(this.applications, a)
      }
      _onStreamDirectSource(e, a, t, d) {
        this.mode = "verbatim-source", this.streamKey = e, this._onDirectorAction({
          type: f.StreamDirectorActionType.STREAM,
          sourceId: a,
          audioSourceId: t,
          sound: d
        })
      }
      _onStreamEnd(e) {
        if (this.streamKey === e) switch (this.streamKey = null, this.mode) {
          case "application":
            this.director.onStreamEnd();
            break;
          case "verbatim-source":
            this._onDirectorAction({
              type: f.StreamDirectorActionType.STOP
            });
            break;
          default:
            var a;
            throw Error("unknown streaming mode: ".concat(null !== (a = this.mode) && void 0 !== a ? a : "(none)"))
        }
      }
      _onStreamKilled(e) {
        if (this.streamKey === e) switch (this.streamKey = null, this.mode) {
          case "application":
            this.director.onStreamKilled();
            break;
          case "verbatim-source":
            break;
          default:
            var a;
            throw Error("unknown streaming mode: ".concat(null !== (a = this.mode) && void 0 !== a ? a : "(none)"))
        }
      }
      _onDirectorAction(e) {
        let a = r.default.getCurrentUserActiveStream(),
          t = o.default.getState();
        switch (e.type) {
          case f.StreamDirectorActionType.STREAM:
            if (null != a && (0, n.setStreamPaused)(a, !1), e.sourceId.startsWith("camera") && null != e.audioSourceId) {
              let a = e.sourceId.split(":")[1];
              c.default.setGoLiveSource({
                cameraSettings: {
                  videoDeviceGuid: a,
                  audioDeviceGuid: e.audioSourceId
                },
                qualityOptions: {
                  preset: t.preset,
                  resolution: t.resolution,
                  frameRate: t.fps
                },
                context: p.MediaEngineContextTypes.STREAM
              })
            } else {
              var d;
              c.default.setGoLiveSource({
                desktopSettings: {
                  sourceId: e.sourceId,
                  sound: null === (d = e.sound) || void 0 === d || d
                },
                qualityOptions: {
                  preset: t.preset,
                  resolution: t.resolution,
                  frameRate: t.fps
                },
                context: p.MediaEngineContextTypes.STREAM
              })
            }
            break;
          case f.StreamDirectorActionType.PAUSE:
            null != a && (0, n.setStreamPaused)(a, !0);
            break;
          case f.StreamDirectorActionType.STOP:
            null != a && (0, b.default)(a);
            break;
          default:
            throw Error("unhandled stream action: ".concat(e.type))
        }
      }
      _onCapturePaused(e) {
        let a = r.default.getCurrentUserActiveStream();
        null != a && (0, n.setStreamPaused)(a, e)
      }
      _onCaptureEnded() {
        switch (this.mode) {
          case "application":
            this._onCapturePaused(!0);
            break;
          case "verbatim-source":
            null != this.streamKey && this._onStreamEnd(this.streamKey);
            break;
          default:
            var e;
            throw Error("unknown streaming mode: ".concat(null !== (e = this.mode) && void 0 !== e ? e : "(none)"))
        }
      }
      constructor() {
        h(this, "director", void 0), h(this, "applications", void 0), h(this, "streamKey", void 0), h(this, "mode", void 0), this.mode = null, this.applications = [], this.director = new f.StreamDirector(e => this._onDirectorAction(e)), d.default.subscribe("STREAM_START", e => {
          let {
            streamType: a,
            guildId: t,
            channelId: d,
            pid: c,
            sourceId: n,
            audioSourceId: f,
            sound: o
          } = e, r = l.default.getId(), b = (0, s.encodeStreamKey)({
            streamType: a,
            guildId: t,
            channelId: d,
            ownerId: r
          });
          null == c != (null == n) ? (null != c && this._onStreamApplication(b, c), null != n && this._onStreamDirectSource(b, n, f, o)) : new i.default("ApplicationSwitchingManager").warn("invalid start_stream: both application + display modes were specified (pid: ".concat(c, ", source-id: ").concat(n, ")"))
        }), d.default.subscribe("STREAM_DELETE", e => {
          let {
            streamKey: a
          } = e;
          this._onStreamKilled(a)
        }), d.default.subscribe("STREAM_STOP", e => {
          let {
            streamKey: a
          } = e;
          this._onStreamEnd(a)
        }), d.default.subscribe("RUNNING_GAMES_CHANGE", e => {
          let {
            games: a
          } = e;
          this._onGameDetectionUpdate(a)
        }), d.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
          let {
            videoState: a,
            context: t
          } = e;
          t === p.MediaEngineContextTypes.STREAM && this._onCapturePaused(a === u.MediaEngineVideoStates.PAUSED)
        }), d.default.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", e => {
          let {
            settings: a
          } = e;
          (null == a ? void 0 : a.context) === p.MediaEngineContextTypes.STREAM && (null == a ? void 0 : a.desktopSettings) == null && (null == a ? void 0 : a.cameraSettings) == null && this._onCaptureEnded()
        })
      }
    }
    a.default = {
      instance: null,
      init() {
        null == this.instance && (this.instance = new m)
      }
    }