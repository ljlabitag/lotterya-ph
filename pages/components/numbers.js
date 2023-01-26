import Randomizer from "./randomizer";
import prisma from "@/lib/prisma";

export default async function Numbers() {
    await prisma.numbers.create({
        data: {
            name: 'Leo',
            r_numbers: Randomizer
        }
    });

    
}