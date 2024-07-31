import * as React from "react"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const SelectEmpresas = () => {
    return (
        <Select >
            <SelectTrigger
                className="inline-flex items-center justify-center text-[13px] leading-none h-[35px] gap-[5px] bg-transparent text-violet11 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
                aria-label="Empresas"
            >
                <SelectValue placeholder="Empresas" className="text-white text-2xl hover:text-indigo-400 cursor-pointer font-light" />
            </SelectTrigger>
            <SelectContent className="border-none">
                <SelectGroup>
                    <SelectLabel>Empresas</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectEmpresas
