import ContainerWrapper from "@/components/common/container-wrapper"
import { ArrowLeftIcon, Calendar, CalendarIcon, CircleAlertIcon, EyeIcon, HeartIcon, MapPinIcon, MessageSquareIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import PropertyImages from "./sections/property-images"
import PropertyInfo from "./sections/property-info"
import { Button } from "@/components/ui/button"

const Property = () => {
    return (
        <div className="@container">
            <ContainerWrapper className="py-10">
                <Link href="/">
                    <div className="inline-flex items-center gap-x-2.5 text-sm hover:underline underline-offset-2 mb-8">
                        <ArrowLeftIcon size={18} /> Tillbaka
                    </div>
                </Link>
                
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-8 flex flex-col gap-6">
                        <PropertyImages />
                        <PropertyInfo />
                    </div>

                    <div className="col-span-4 flex flex-col gap-6">
                        <Card className="py-6 shadow-xs">
                            <CardContent className="px-6">
                                <div className="text-2xl font-semibold tracking-tight mb-4">
                                    Kontakta mäklaren
                                </div>

                                <Button size="lg" className="w-full mb-3">
                                    <MessageSquareIcon />
                                    Skicka meddelande
                                </Button>

                                 <Button variant="outline" size="lg" className="w-full">
                                    <CalendarIcon />
                                    Boka visning
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="py-6 shadow-xs">
                            <CardContent className="px-6">
                                <div className="text-2xl font-semibold tracking-tight mb-4">
                                    Kostnadskalkyl för fastighet
                                </div>
                                
                                <div className="flex justify-between text-sm mb-1.5">
                                    <div className="text-muted-foreground">Köpeskilling</div>
                                    <div className="font-semibold">18 500 000 kr</div>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <div className="text-muted-foreground">Driftskostnad</div>
                                    <div className="font-semibold">8 500 kr/mån</div>
                                </div>
                                
                                <div className="py-3 my-3 border-y">
                                    <div className="text-sm font-semibol mb-1.5">Engångskostnader (uppskattning)</div>
                                    <div className="flex justify-between text-sm text-muted-foreground mb-1.5">
                                        <div className="text-sm text-muted-foreground">Lagfart (1,5%)</div>
                                        <div className="">277 500 kr</div>
                                    </div>
                                    <div className="flex justify-between text-sm text-muted-foreground mb-1.5">
                                        <div className="text-sm text-muted-foreground">Pantbrev (2%)</div>
                                        <div className="">370 000 kr</div>
                                    </div>
                                    <div className="flex justify-between text-sm text-muted-foreground mb-1.5">
                                        <div className="text-sm text-muted-foreground">Fastighetsbesiktning</div>
                                        <div className="">~12 000 kr</div>
                                    </div>
                                    <div className="flex justify-between text-sm text-muted-foreground mb-1.5">
                                        <div className="text-sm text-muted-foreground">Flytt</div>
                                        <div className="">~15 000 kr</div>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between font-semibold mb-3">
                                    <div>Total engångskostnad</div>
                                    <div>674 500 kr</div>   
                                </div>

                                <div className="bg-primary/10 text-muted-foreground text-xs p-3.5 rounded-md mb-3">
                                    Detta är en uppskattning för fastighetsköp. Faktiska kostnader kan variera beroende på 
                                    fastighetens storlek och läge.
                                </div>

                                <Button size="lg" className="w-full">
                                    Fullständig kalkyl
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="py-6 shadow-xs">
                            <CardContent className="px-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <MapPinIcon />
                                    <div className="text-2xl font-semibold tracking-tight">
                                        Område
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-md border border-primary-light mb-4">
                                    <div className="flex items-center gap-2 text-primary-light text-sm">
                                        <CircleAlertIcon size={16} />
                                        Kunde inte hitta adressen på kartan
                                    </div>
                                </div>

                                <div className="text-sm text-muted-foreground font-medium mb-0.5">Adress:</div>
                                <div className="text-sm text-muted-foreground mb-0.5">Strandvägen 42</div>
                                <div className="text-sm text-muted-foreground mb-0.5">182 68 Djursholm</div>
                            </CardContent>
                        </Card>

                        <Card className="py-6 shadow-xs">
                            <CardContent className="px-6">
                                <div className="text-2xl font-semibold tracking-tight mb-4">
                                    Statistik
                                </div>
                                
                                <div className="flex justify-between text-sm mb-2">
                                    <div className="inline-flex items-center gap-2"><EyeIcon size={16} /> Visningar</div>
                                    <div className="font-semibold">-</div>
                                </div>

                                <div className="flex justify-between text-sm mb-2">
                                    <div className="inline-flex items-center gap-2"><HeartIcon size={16} /> Favoriter</div>
                                    <div className="font-semibold">-</div>
                                </div>

                                 <div className="flex justify-between text-sm">
                                    <div className="inline-flex items-center gap-2"><Calendar size={16} /> Dagar på marknaden</div>
                                    <div className="font-semibold">0</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="py-6 shadow-xs">
                            <CardContent className="px-6">
                                <div className="text-2xl font-semibold tracking-tight mb-4">
                                    Liknande fastigheter
                                </div>
                                
                                <div className="text-muted-foreground text-center">Kommer snart...</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
               
            </ContainerWrapper>
        </div>
    )
}

export default Property