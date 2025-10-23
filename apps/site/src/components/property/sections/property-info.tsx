import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BathIcon, BedDoubleIcon, HeartIcon, HouseIcon, MapPinIcon, RulerIcon, Share2Icon, WandSparklesIcon } from "lucide-react"
import Link from "next/link"

const specs = [
    {
        icon: <RulerIcon />,
        value: "285 m²",
        label: "Boarea"
    },
    {
        icon: <HouseIcon />,
        value: "8 rum",
        label: "Antal rum"
    },
    {
        icon: <BedDoubleIcon />,
        value: "5",
        label: "Sovrum"
    },
    {
        icon: <BathIcon />,
        value: "3",
        label: "Badrum"
    },
]

const PropertyInfo = () => {
    return (
        <Card className="py-6 shadow-xs">
            <CardContent className="px-6">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-2xl font-semibold tracking-tight">
                        Exklusiv villa med havsutsikt
                    </h3>

                    <div className="flex items-center gap-2">
                        <Button variant="outline">
                            <HeartIcon />
                        </Button>
                        <Button variant="outline">
                            <Share2Icon />
                        </Button>
                        <Link href="/ai-bildredigering">
                            <Button variant="ghost" className="text-sm font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white border-0">
                                <WandSparklesIcon /> AI Renovering
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="flex items-start text-muted-foreground gap-1.5 mb-6">
                    <MapPinIcon size={18} className="mt-[3px]" />
                    <div className="text-base">Strandvägen 42, 182 68 Djursholm</div>
                </div>

                <div className="text-3xl text-primary font-bold mb-0.5">18 500 000 kr</div>
                <div className="text-sm text-muted-foreground mb-8">+ 8 500 kr/månad</div>
                
                <div className="grid grid-cols-4 gap-4 border-b pb-6">
                    {specs.map((spec, index) => (
                        <div key={`property-spec-${index}`} className="flex flex-col items-center">
                            <div className="text-muted-foreground mb-2">{spec.icon}</div>
                            <div className="font-semibold">{spec.value}</div>
                            <div className="text-sm text-muted-foreground">{spec.label}</div>
                        </div>
                    ))}
                </div>

                <div className="py-6 border-b">
                    <div className="font-semibold mb-3">Beskrivning</div>
                    <p className="text-muted-foreground">
                        Magnifik villa i absolut toppskick med panoramautsikt över havet. Genomgående exklusiva materialval, 
                        rymliga sällskapsytor och perfekt planlösning för familjen som värdesätter kvalitet och komfort.
                    </p>
                </div>

                <div className="py-6">
                    <div className="font-semibold mb-3">Fastighetsinformation</div>
                    <div className="grid grid-cols-2 gap-x-14 gap-y-2">
                        <div className="flex justify-between">
                            <div className="text-sm text-muted-foreground">Fastighetstyp:</div>
                            <div className="text-sm">Villa</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-sm text-muted-foreground">Publicerad:</div>
                            <div className="text-sm">2025-10-22</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-sm text-muted-foreground">Uppdaterad:</div>
                            <div className="text-sm">2025-10-22</div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default PropertyInfo