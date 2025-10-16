import { Card, CardContent } from "@/components/ui/card"
import { BrainIcon, FilePenIcon, HouseIcon, TrendingUpIcon } from "lucide-react"

const features = [
    {
        title: "AI-Rekommendationer",
        description: "Personliga tips och rekommendationer baserade på din sökhistorik och önskemål",
        icon: <BrainIcon className="text-white" size={32} />
    },
    {
        title: "Marknadsanalys",
        description: "Värderingar och förväntningar baserade på marknadsdata och avancerad AI-teknologi",
        icon: <TrendingUpIcon className="text-white" size={32} />
    },
    {
        title: "Digitala hyreskontrakt",
        description: "Efter vald hyresbostad hjälper vi med digitala hyreskontrakt och säker signering med BankID",
        icon: <FilePenIcon className="text-white" size={32} />
    },
    {
        title: "Brett utbud av bostäder",
        description: "Första portalen i Sverige som erbjuder alla typer av bostäder på en och samma plattform",
        icon: <HouseIcon className="text-white" size={32} />
    },
]

const Hero = () => {
    return (
        <div className="relative h-auto w-full py-10 @lg:py-12 @6xl:py-16 bg-[url('../images/bg-image.webp')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-primary/40" />

            <div className="container mx-auto max-w-7xl px-6 @lg:px-8 @8xl:px-0 relative z-10">
                <h1 className="text-center text-4xl @4xl:text-6xl font-semibold tracking-tight text-white mb-8">
                    Välkommen till Bostadsvyn!
                </h1>

                <div className="grid grid-cols-1 @lg:grid-cols-2 @6xl:grid-cols-4 gap-6 mb-8">
                    {features.map((feature, index) => (
                        <Card key={`feature-${index}`} className="bg-white/5 border border-primary-foreground/10 backdrop-blur-sm">
                            <CardContent>
                                <div className="flex justify-center mb-2">{feature.icon}</div>
                                <h6 className="text-lg text-white text-center font-semibold mb-1">{feature.title}</h6>
                                <p className="text-sm text-neutral-200 text-center">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div>
                    <Card className="bg-white/30 border border-primary-foreground/10 backdrop-blur-lg h-[30rem]">
                        <CardContent>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Hero