import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'




const ItemLayout = ({ children , className }) => {
 return <div className={clsx("custom-bg p-8 rounded-xl flex items-center justify-center space-y-8", className)}   >{children}</div> 
  
}
const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>

      <div className='grid grid-cols-12 gap-8 w-full'>
        <ItemLayout className='col-span-8 row-span-2 flex-col items-start '>
          <h2 className="text-2xl text-left w-full capitalize">
          Junior Developer
          </h2>
          <p className="font-light ">
          My journey as a software developer has been a diverse and enriching experience. I began with foundational languages like JavaScript, Python, and Java, each opening doors to various realms of programming. Mastering the MERN (MongoDB, Express.js, React, Node.js) stack allowed me to develop full-stack applications with ease and efficiency. As my skills grew, I ventured into the fascinating world of computer vision, harnessing the power of algorithms to interpret and manipulate visual data. This exploration was further complemented by hands-on projects with Raspberry Pi and Arduino,
           where I integrated hardware and software to create innovative solutions. Each step of my journey has expanded my expertise and fueled my passion for technology.

          </p>
        </ItemLayout>
        <ItemLayout className='col-span-4 text-accent'>
          <p className='font-semibold w-full text-left1 text-5xl'>
          3+ <sub   className='font-semibold text-base' >Clients</sub> 
          </p>
        </ItemLayout>
        <ItemLayout className='col-span-4 text-accent '>
          <p className='font-semibold w-full text-left1 text-5xl'>
          1+ <sub   className='font-semibold text-base' >year of experience</sub> 
          </p>
        </ItemLayout>

        <ItemLayout className='col-span-4  !p-0 '>
          <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs/?username=mohamedalibaccouche02&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
           alt='MOhamed ali Baccouche' loading='lazy' />
        </ItemLayout>
        <ItemLayout className='col-span-8  !p-0 '>
          <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=mohamedalibaccouche02&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
           alt='MOhamed ali Baccouche' loading='lazy' />
        </ItemLayout>
        <ItemLayout className='col-span-full  '>
          <img className='w-full h-auto' src={`https://skillicons.dev/icons?i=bootstrap,css,docker,firebase,git,github,html,js,jquery,linux,mongodb,mysql,nextjs,nodejs,npm,postgres,react,redux,tailwind,threejs,vite,vscode,androidstudio,arduino,c,cpp,debian,eclipse,flask,java,nestjs,postman,py,raspberrypi,react,redis,tensorflow,`}
           alt='MOhamed ali Baccouche' loading='lazy' />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <a href='https://git.io/streak-stats'>
          <img
            className="w-full h-auto"
            src='https://github-readme-streak-stats.herokuapp.com/?user=mohamedalibaccouche02&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B'
            alt="Mohamed ali baccouche"
            loading="lazy"
          /></a>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/mohamedalibaccouche02"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=mohamedalibaccouche02&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Mohamed ali Baccouche"
              loading="lazy"
            />
          </Link>
        </ItemLayout>






      </div>

    </section>
  )
}

export default AboutDetails
