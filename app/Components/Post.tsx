'use client'



type PostArguments = {
  title: string,
  description: string
}


export function Post(args: PostArguments) {

  return (
    <div className="p-4">
      <div className="border-solid border-3 p-2 rounded-md border-gray-300">
        <h1 className="text-4xl">{args.title}</h1>
        <p className="pl-4 mt-3">{args.description}</p>
      </div>
    </div>
  )
}