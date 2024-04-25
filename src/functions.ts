import { SayHelloProps } from "./types"

export const sayHello = ({ name }: SayHelloProps) => {
  console.log(`Hello, ${name}!`)
}
