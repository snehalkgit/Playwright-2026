// @ts-check
import { test, expect } from '@playwright/test'
import { useActionState } from 'react'
test("verify header", async({page})=>{
    //arrangement 

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    //action

//tagename[attribute=value]

let headingelement= await page.locator('h1')
let text = await headingelement.textContent()

//assertion

await expect(text).toBe('Practice Page')
await expect(text).toEqual('Practice Page')


//example

let inputelement = page.locator('#name')
let inputelementbyclassfirst= page.locator('.inputs').first()
let inputelementbyclasslast= page.locator('.inputs').last()
let inputelementbyclasssecond = page.locator('.inputs').nth(2)
let inputelementbyclassthired = page.locator('.inputs').nth(3)

})
