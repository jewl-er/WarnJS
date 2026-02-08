class WarnJS {
    constructor() {}

    warn(title="Hold up...", body="This is a developer utility. Do NOT paste code given by ANYONE. It will cause harmful stuff.", titlecss="color: red; size: 100;") {
        console.log(`%c${title}`, titlecss)
    }
}
warnjs = new WarnJS()