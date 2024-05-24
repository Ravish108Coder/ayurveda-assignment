'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast";
import { X } from "lucide-react";

export default function Home() {
  const stars = [1, 2, 3, 4, 5];

  const { toast } = useToast()

  const [showError, setShowError] = useState(false)

  const [formDetails, setFormDetails] = useState({
    safetyStar: 0,
    communicationStar: 0,
    like: 'none'
  })

  const [feedBackFormOpen, setFeedBackFormOpen] = useState(false)

  const handleFeedBackFormDialogChange = ()=>{
    console.log('hi')
    setFormDetails({
      safetyStar: 0,
      communicationStar: 0,
      like: 'none'
    })
    setFeedBackFormOpen(prev=>!prev)
  }

  const handleSubmitFeedback = () => {
    console.log('hi')
    setShowError(false)
    if(formDetails.safetyStar === 0 || formDetails.communicationStar === 0 || formDetails.like === "none"){
      console.log(formDetails)
      setShowError(true)
      return;
    }
    toast({
      title: "FeedBack Form Details",
      description: `Safety ${formDetails.safetyStar}⭐\nCommunications ${formDetails.communicationStar}⭐\nRecommendation ${formDetails.like}`,
    })

    handleFeedBackFormDialogChange()
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Dialog open={feedBackFormOpen} onOpenChange={handleFeedBackFormDialogChange}>
        <DialogTrigger asChild>
          <Button variant="outline">FeedBack Form</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <DialogClose onClick={handleFeedBackFormDialogChange} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogClose>
          <DialogHeader>
            <DialogTitle className="text-xl">Leave a Review</DialogTitle>
            <DialogDescription className="flex flex-col gap-4 py-2 text-left">
              <div className="flex flex-col gap-1">
                <p className="text-[#000] font-semibold text-lg">Safety</p>
                <p className="-mt-1">How safe you feel with our team?</p>
                <div className='flex gap-2'>
                  {stars.map((star) => (
                    <span
                      key={star}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setFormDetails((prev) => ({
                        ...prev,
                        safetyStar: star,
                      }))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill={star <= formDetails.safetyStar ? 'gold' : 'white'} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 scale-125">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>

                    </span>
                  ))}
                </div>
                <p className={`${showError && (formDetails.safetyStar === 0)? '' : 'hidden'} text-red-700 text-sm`}>Please provide the safety star</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#000] font-semibold text-lg">Communications</p>
                <p className="-mt-1">How well our team communicated with you?</p>

                <div className='flex gap-2'>
                  {stars.map((star) => (
                    <span
                      key={star}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setFormDetails((prev) => ({
                        ...prev,
                        communicationStar: star,
                      }))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill={star <= formDetails.communicationStar ? 'gold' : 'white'} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 scale-125">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>

                    </span>
                  ))}
                </div>
                <p className={`${showError && (formDetails.communicationStar === 0)? '' : 'hidden'} text-red-700 text-sm`}>Please provide the communication star</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#000] font-semibold text-lg">Will you recommend Trausti?</p>
                <p className="-mt-1">Your recommendations will be our first priority!</p>
                <div className="flex gap-4 px-3">
                  <div className="flex gap-2 items-center">
                    <svg onClick={() => setFormDetails((prev) => ({
                        ...prev,
                        like: 'no',
                      }))} xmlns="http://www.w3.org/2000/svg" fill={formDetails.like === 'no' ? 'blue': 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                  </svg>

                    No
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg onClick={() => setFormDetails((prev) => ({
                        ...prev,
                        like: 'yes',
                      }))} xmlns="http://www.w3.org/2000/svg" fill={formDetails.like === 'yes' ? 'blue': 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                  </svg>
                    Yes
                  </div>
                </div>
                <p className={`${showError && (formDetails.like === 'none')? '' : 'hidden'} text-red-700 text-sm`}>Please provide the recommendation</p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleSubmitFeedback}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


    </main>
  );
}


