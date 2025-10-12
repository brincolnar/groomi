import { useState, useEffect, useRef } from 'react'
import majPhoto from '../assets/maj.jpg'
import sandiPhoto from '../assets/sandi.png'

const teamMembers = [
  {
    name: 'Maj',
    fullName: 'Maj Stanič',
    extension: 'a',
    role: 'Stylist',
    description:
      'Maj združuje trendovske kroje in sproščeno energijo. Lotil se bo tudi najbolj zahtevnih idej in jih prilagodil tvojemu obrazu.',
    photo: majPhoto,
  },
  {
    name: 'Sandi',
    extension: 'ja',
    fullName: 'Sandi Novak',
    role: 'Master barber',
    description:
      'Sandi je specialist za klasične fade in natančno oblikovanje brade. Za vsakega gosta si vzame čas in poskrbi, da styling sledi osebnemu značaju.',
    photo: sandiPhoto,
  },
]

function Ekipa() {
  const [titleVisible, setTitleVisible] = useState(false)
  const [visibleMembers, setVisibleMembers] = useState([])
  const titleRef = useRef(null)
  const memberRefs = useRef([])

  // Animate main title
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true)
          } else {
            setTitleVisible(false)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
    }
  }, [])

  // Animate team members individually
  useEffect(() => {
    const observers = memberRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleMembers((prev) => [...new Set([...prev, index])])
            } else {
              setVisibleMembers((prev) => prev.filter((i) => i !== index))
            }
          })
        },
        { threshold: 0.3 }
      )

      if (ref) {
        observer.observe(ref)
      }

      return observer
    })

    return () => {
      observers.forEach((observer, index) => {
        if (memberRefs.current[index]) {
          observer.unobserve(memberRefs.current[index])
        }
      })
    }
  }, [])

  return (
    <section id="ekipa" className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4">
        {/* Main title */}
        <div 
          ref={titleRef}
          className={`mb-24 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold text-groomiblue md:text-5xl">
          Tvoji <span className="text-groomizenf">mojstri</span> za škarjami ✂️
          </h2>
          <p className="text-xl text-neutral-600 mt-4">Poznamo tvojo glavo bolje kot tvoja bivša.</p>
        </div>

        {/* Team members */}
        <div className="space-y-32">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (memberRefs.current[index] = el)}
              className={`transition-all duration-1000 ${
                visibleMembers.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className={`grid grid-cols-1 gap-12 items-center ${
                index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'
              }`}>
                {/* Text content */}
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <h3 className="text-3xl font-bold text-groomiblue mb-6 md:text-5xl">
                    Spoznaj <span className="text-groomizenf">{member.name}{member.extension}.</span>
                  </h3>
                  <p className="text-xl leading-8 text-neutral-700 mb-4">
                    {member.description}
                  </p>
                  <p className="text-sm uppercase tracking-wide text-neutral-500 font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Photo */}
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl">
                    <img
                      src={member.photo}
                      alt={member.fullName}
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ekipa
