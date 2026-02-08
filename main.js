class WarnJS {
    constructor() {}

    warn(title="Hold up...", body="This is a developer utility. Do NOT paste code given by ANYONE. It will cause harmful stuff.", titlecss="color: red; font-size: 70px;", bodycss="") {
        console.log(`%c${title}`, titlecss)
        console.log(`%c${body}`, bodycss)
    }
}
warnjs = new WarnJS()