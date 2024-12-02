// 基本用法
type num = number
let a: num
a = 1

// 联合类型
type Status = boolean | "false"
let st: Status
st = false
st = "false"

type Gender = "男" | "女"
let ge: Gender
ge = "女"

// 交叉类型
type House = { city: string; name: string } & { area: number }
let domin: House = {
    name: 'xlxc',
    city: "Nanjing",
    area: 20
}

//特殊情况：使用类型声明定义返回值为void的函数类型时，实现该类型的函数并不会强制要求返回值为void