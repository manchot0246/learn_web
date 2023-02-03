var timeout;

function delayHey(target, tms) {
 timeout = window.setTimeout(() => hey(target), tms)
}

function hey(target) {
    window.clearTimeout(timeout)
    window.location=target
}