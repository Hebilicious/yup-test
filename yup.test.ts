import { object, number } from "yup"

const isWithinLimits = (n: number) => true

const main = async () => {
  const schema = object({
    age: number().required().test("test", "test", isWithinLimits)
  })

  const obj = {
    age: 5
  }
  return schema.isValid(obj)
}

main()
