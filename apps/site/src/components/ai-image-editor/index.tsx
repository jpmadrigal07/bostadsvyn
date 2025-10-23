"use client"

import ContainerWrapper from "@/components/common/container-wrapper"
import { BotIcon, DownloadIcon, ImageIcon, LoaderCircleIcon, OctagonAlertIcon, Share2Icon, SparklesIcon, WandSparklesIcon } from "lucide-react"
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
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Response } from "@/components/ai-elements/response"

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
    const [input, setInput] = useState<string>("");

    const { messages, sendMessage, status, } = useChat({
        transport: new DefaultChatTransport({
            api: "/api/ai/image-editor"
        })
    })

    const handleSubmit = () => {
        const image = propertyImages.find(img => img.index === selectedImage);

		sendMessage({
            text: input,
            files: image
                ? [{
                    url: image.src.src,
                    mediaType: "image/png",
                    type: "file"
                }]
                : []
        });
		setInput("");
	};

    const handleDownloadImage = (url: string) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = `ai-edited-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
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
                                <button 
                                    key={`property-image-${image.index}`} 
                                    className={`w-full relative overflow-hidden h-44 rounded-lg group border-2 cursor-pointer ${selectedImage === image.index && "border-primary"}`}
                                    onClick={() => setSelectedImage(image.index)}
                                >
                                    <Image src={image.src} alt={`Fastighetsbild ${image.index}`} layout="fill" objectFit="cover" />
                                    <div className="absolute top-3 left-3 text-xs font-medium bg-nordic-snow text-primary px-3 py-1 rounded-full">Bild {image.index}</div>
                                    {selectedImage === image.index && (
                                        <div className="absolute top-3 right-3 text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
                                            Vald
                                        </div>
                                    )} 

                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
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
                                        <MessageContent className="group-[.is-assistant]:bg-muted">
                                            Välkommen till AI-bildredigeraren för "Exklusiv villa med havsutsikt"! 🏠✨ <br /><br />
                                            Jag kan hjälpa dig visualisera hur fastigheten skulle kunna se ut med olika förändringar: <br /><br />
                                            <span>🎨 <strong>Måla om väggar</strong> - "Måla vardagsrummet i ljusblått"</span>
                                            <span>🪑 <strong>Möblera om</strong> - "Lägg till en stor soffa och ett soffbord"</span>
                                            <span>💡 <strong>Ändra belysning</strong> - "Lägg till varmare belysning"</span>
                                            <span>🔧 <strong>Renovera</strong> - "Gör ett öppet kök mot vardagsrummet"</span> 
                                            <span>🌿 <strong>Dekorera</strong> - "Lägg till växter och tavlor"</span> <br />
                                            Den första bilden är vald som standard, men du kan välja vilken annan bild du föredrar. <br /><br />
                                            När du har valt en bild, låt oss veta vilka ändringar du vill göra!  <br /><br />
                                            <span>💡 <strong>Tips</strong>: Logga in för att spara och dela dina AI-redigeringar automatiskt!</span>
                                        </MessageContent>
                                        <MessageAvatar name="AI Assistant" src="/bot.svg" />
                                    </Message>

                                    {messages.map((message) => (
                                        <Message from={message.role} key={message.id} className="items-start">
                                            <MessageContent className="group-[.is-assistant]:bg-muted">
                                                {message.parts.map((part, i) => {
                                                    switch (part.type) {
                                                        case "text":
                                                            return (
                                                                <Response key={`response-${message.id}-${i}`}>
                                                                    {part.text}
                                                                </Response>
                                                            );
                                                        case "file": 
                                                            if(part.mediaType.startsWith("image/png") && message.role === "assistant")
                                                                return (
                                                                    <div key={`image-${message.id}-${i}`} className="aspect-video min-h-64 relative group">
                                                                        <Image src={part.url} alt="AI-bild" layout="fill" objectFit="cover" />
                                                                        
                                                                        <div className="absolute top-2 right-2 hidden group-hover:flex gap-2">
                                                                            <button 
                                                                                className="bg-nordic-snow text-primary-deep rounded-sm px-3 py-2.5 hover:bg-nordic-snow hover:text-primary-deep hover:opacity-90 cursor-pointer"
                                                                                onClick={() => handleDownloadImage(part.url)}    
                                                                            >
                                                                                <DownloadIcon size={14} />
                                                                            </button>
                                                                            <button className="bg-nordic-snow text-primary-deep rounded-sm px-3 py-2.5 hover:bg-nordic-snow hover:text-primary-deep hover:opacity-90 cursor-pointer">
                                                                                <Share2Icon size={14} />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            else 
                                                                return null
                                                        default:
                                                            return null
                                                    }
                                                })}
                                            </MessageContent>
                                            {message.role === "assistant" && (
                                                <MessageAvatar name="AI Assistant" src="/bot.svg" />
                                            )}
                                        </Message>
                                    ))}
                                    
                                    {(status === "submitted" || status === "streaming") && (
                                        <Message from="assistant" className="items-start">
                                            <MessageContent className="group-[.is-assistant]:bg-muted group-[.is-assistant]:text-muted-foreground flex flex-row items-center">
                                                <LoaderCircleIcon className="animate-spin text-primary" /> AI arbetar...
                                            </MessageContent>
                                            <MessageAvatar name="AI Assistant" src="/bot.svg" />
                                        </Message>
                                    )}

                                    {status === "error" && (
                                        <Message from="assistant" className="items-start">
                                            <MessageContent className="group-[.is-assistant]:bg-muted">
                                                Oj, något gick fel när jag försökte bearbeta din begäran. Kan du försöka igen?
                                            </MessageContent>
                                            <MessageAvatar name="AI Assistant" src="/bot.svg" />
                                        </Message>
                                    )}
                                </ConversationContent>
                            </Conversation>
                        </div>

                        <div className="px-6 pt-4 pb-2 border-t">
                            <PromptInput className="relative w-full mb-2.5" onSubmit={handleSubmit}>
                                <PromptInputTextarea 
                                    className="pr-12 text-sm" 
                                    placeholder="Beskriv vad du vill ändra eller renovera..." 
                                    onChange={(e) => setInput(e.currentTarget.value)}
                                    value={input}
                                />
                                <PromptInputSubmit 
                                    className="absolute bottom-1 right-1 cursor-pointer" 
                                    disabled={!input.trim() || status === "submitted" || status === "streaming" || selectedImage === 0}
						            status={status === "streaming" ? "streaming" : "ready"}
                                />
                            </PromptInput>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </ContainerWrapper>
    )
}

export default ImageEditor