import { describe, test } from "@jest/globals"

describe.each([1, 2, 3])('test %i', (i) => {
  test.concurrent('test', async () => {
    await new Promise((resolve) => setTimeout(resolve, 4_000))
  })
})