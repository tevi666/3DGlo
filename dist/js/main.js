(() => {
    "use strict";
    (e => {
        const t = document.getElementById("timer"),
            n = document.getElementById("timer-hours"),
            o = document.getElementById("timer-minutes"),
            m = document.getElementById("timer-seconds"),
            s = document.getElementById("timer-deys");
        let r;
        const i = () => {
            let d = (() => {
                let n = (new Date(e).getTime() - (new Date).getTime()) / 1e3,
                    o = Math.floor(n / 60 / 60 / 24),
                    m = Math.floor(n / 60 / 60 % 24),
                    s = Math.floor(n / 60 % 60),
                    i = Math.floor(n % 60);
                const d = o < 10 ? "0" + o : o,
                    l = m < 10 ? "0" + m : m,
                    c = s < 10 ? "0" + s : s,
                    u = i < 10 ? "0" + i : i;
                return t.textContent = `${d} : ${l} : ${c} : ${u}`, n <= 0 && (clearInterval(r), t.textContent = "00 : 00 : 00 : 00"), {
                    timeRemaining: n,
                    deys: o,
                    hours: m,
                    minutes: s,
                    seconds: i
                }
            })();
            s.textContent = d.deys, n.textContent = d.hours, o.textContent = d.minutes, m.textContent = d.seconds, d.timeRemaining > 0 && setInterval(i, 1e3)
        };
        i(), r = setInterval(i, 1e3)
    })("27 september 2022")
})();