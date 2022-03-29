function toggleDarkMode() {
    const DARK_CLASS = 'dark';

    var body = document.querySelector("body");
    if (body.classList.contains(DARK_CLASS)) {
        setCookie('theme', 'light');
        body.classList.remove(DARK_CLASS);
    } else {
        setCookie('theme', 'dark');
        body.classList.add(DARK_CLASS);
    }

    let s = document.createElement( 'script' );
    s.setAttribute('src', 'https://utteranc.es/client.js');
    s.setAttribute('repo', 'decorus-kazuma/blog.decorus.io');
    s.setAttribute('theme', `github-${getCookie("theme")}`);
    s.setAttribute('crossorigin', '"anonymous"');
    s.setAttribute('async', '')
    s.setAttribute('issue-term', 'pathname');
    if (document.getElementById('comment') !== null) {
        document.getElementById('comment').innerHTML = '';
        document.getElementById('comment').appendChild(s);
    }
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;SameSite=strict;expires=" + d.toGMTString();
}

function deleteCookie(name) { setCookie(name, '', -1); }


const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var theme = getCookie('theme');
if ( (theme === null && userPrefersDark) || theme === 'dark') {
    var checkDarkDone = false;
    function checkDark() {
        if (!checkDarkDone) {
            toggleDarkMode();
        }
        checkDarkDone = true;
    };

    function toggleSwitch() {
        document.querySelectorAll('.dark-mode-toggle').forEach(ti => ti.checked = true);
    };

    // Attempt both requestAnimationFrame and DOMContentLoaded, whichever comes first.
    if (window.requestAnimationFrame) window.requestAnimationFrame(checkDark);
    window.addEventListener('DOMContentLoaded', checkDark);

    window.addEventListener('DOMContentLoaded', toggleSwitch);
}
