"use client"

import ContainerWrapper from "@/components/common/container-wrapper"
import { BotIcon, ImageIcon, OctagonAlertIcon, SparklesIcon, WandSparklesIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Conversation, ConversationContent } from "@/components/ai-elements/conversation"
import { Message, MessageAvatar, MessageContent } from "@/components/ai-elements/message"
import { PromptInput, PromptInputSubmit, PromptInputTextarea } from "@/components/ai-elements/prompt-input"
import imageOne from "@/images/property-image-1.webp"
import imageTwo from "@/images/property-image-2.webp"
import imageThree from "@/images/property-image-3.webp"
import imageFour from "@/images/property-image-4.webp"
import { useState } from "react"

const propertyImages = [
    {
        index: 1,
        src: imageOne
    },
    {
        index: 2,
        src: imageTwo
    },
    {
        index: 3,
        src: imageThree
    },
    {
        index: 4,
        src: imageFour
    }
]

const ImageEditor = () => {
    const [selectedImage, setSelectedImage] = useState<number>(1)

    return (
        <ContainerWrapper className="py-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <WandSparklesIcon size={28} className="text-primary" />
                <h1 className="text-3xl tracking-tight font-semibold">
                    AI Renoveringsverktyg
                </h1>
                <div className="flex items-center gap-1 bg-primary text-xs text-primary-foreground font-medium px-2 py-0.5 rounded-full">
                    <SparklesIcon size={12} />
                    Gratis
                </div>
            </div>

            <p className="text-muted-foreground mb-2">{`Visualisera renoveringar och förändringar för "Charmigt radhus med trädgård"`}</p>
            <div className="flex gap-1.5 items-center text-sm text-amber-600 mb-8">
                <OctagonAlertIcon size={16} className="" />
                Logga in för att spara och dela dina AI-redigeringar
            </div>

            <div className="grid grid-cols-12 gap-6">
                <Card className="col-span-4 py-0 shadow-xs overflow-hidden">
                    <CardContent className="px-0">
                        <div className="p-6">
                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <ImageIcon className="text-primary "/>
                                <h3 className="text-2xl font-semibold tracking-tight leading">Fastighetsbilder</h3>
                            </div>

                            <p className="text-sm text-muted-foreground">Klicka på en bild för att välja den för AI-redigering</p>
                        </div>

                        <div className="space-y-4 p-6 border-t h-[600px] overflow-y-auto">
                            {propertyImages.map((image) => (
                                <button key={`property-image-${image.index}`} className={`w-full relative overflow-hidden h-44 rounded-lg group border-2 ${selectedImage === image.index ? "border-primary" : "cursor-pointer"}`}>
                                    <Image src={image.src} alt={`Fastighetsbild ${image.index}`} layout="fill" objectFit="cover" />
                                    <div className="absolute top-3 left-3 text-xs font-medium bg-nordic-snow text-primary px-3 py-1 rounded-full">Bild {image.index}</div>
                                    {selectedImage === image.index ? (
                                        <div className="absolute top-3 right-3 text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
                                            Vald
                                        </div>
                                    ) 
                                    : (
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-8 py-0 shadow-xs h-[710px]">
                    <CardContent className="px-0 flex flex-col h-full">
                        <div className="p-6">
                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <BotIcon className="text-primary "/>
                                <h3 className="text-2xl font-semibold tracking-tight leading">AI Renoveringsassistent</h3>
                            </div>

                            <p className="text-sm text-muted-foreground">Beskriv vad du vill ändra på den valda bilden</p>
                        </div>

                        <div className="px-6 border-t flex-1 overflow-y-auto">
                            <Conversation className="relative w-full">
                                <ConversationContent className="py-2">
                                    <Message from="assistant" className="items-start">
                                        <MessageContent className="group-[.is-assistant]:bg-muted">Välkommen till AI-bildredigeraren för "Exklusiv villa med havsutsikt"!</MessageContent>
                                        <MessageAvatar name="AI Assistant" src={"https://github.com/openai.png"} />
                                    </Message>
                                </ConversationContent>
                            </Conversation>
                        </div>

                        <div className="px-6 pt-4 pb-2 border-t">
                            <PromptInput className="relative w-full mb-2.5" onSubmit={() => {}}>
                                <PromptInputTextarea className="pr-12 text-sm" placeholder="Beskriv vad du vill ändra eller renovera..." />
                                <PromptInputSubmit className="absolute bottom-1 right-1 cursor-pointer" />
                            </PromptInput>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </ContainerWrapper>
    )
}

export default ImageEditor