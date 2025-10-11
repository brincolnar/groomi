import barber1 from '../assets/barber1.jpg'
import barber2 from '../assets/barber2.jpg'
import plantwall from '../assets/plant.jpg'

const teamMembers = [
  {
    name: 'Sandi Novak',
    role: 'Master barber',
    description:
      'Sandi je specialist za klasične fade in natančno oblikovanje brade. Za vsakega gosta si vzame čas in poskrbi, da styling sledi osebnemu značaju.',
    photo: barber1,
    socials: {
      instagram: 'https://instagram.com/groomi',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Maj Stanič',
    role: 'Stylist',
    description:
      'Maj združuje trendovske kroje in sproščeno energijo. Lotil se bo tudi najbolj zahtevnih idej in jih prilagodil tvojemu obrazu.',
    photo: barber2,
    socials: {
      instagram: 'https://instagram.com/groomi',
      linkedin: 'https://linkedin.com',
    },
  },
]

const hiringCard = {
  title: 'Pridruži se ekipi',
  description:
    'Si kreativen, natančen in uživaš v delu z ljudmi? V našem barber shopu vedno iščemo ambiciozne posameznike, ki želijo rasti skupaj z nami.',
  cta: 'Prijavi se',
}

function Ekipa() {
  return (
    <section id="ekipa" className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Spoznaj našo ekipo</h2>
          <p className="mt-6 text-md leading-6 text-neutral-700">
            Naša ekipa ni samo skupina frizerjev – smo predani ustvarjalci stila, ki s strastjo in natančnostjo poskrbimo, da iz salona vedno odidete
            samozavestni in zadovoljni. Vsak član prinese svoj edinstven talent in izkušnje, skupaj pa gradimo prostor, kjer je moška nega nekaj več kot
            le striženje – je doživetje.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex h-full flex-col rounded-lg bg-white p-8 shadow-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-neutral-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full object-cover transform-gpu [backface-visibility:hidden] [image-rendering:auto]"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">{member.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">{member.role}</p>
                  </div>
                  <div className="flex gap-3 text-neutral-400">
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'Instagram ' + member.name}
                      className="transition-colors hover:text-neutral-900"
                    >
                      <i className="fa-brands fa-instagram text-lg" aria-hidden="true"></i>
                    </a>
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={'LinkedIn ' + member.name}
                      className="transition-colors hover:text-neutral-900"
                    >
                      <i className="fa-brands fa-linkedin-in text-lg" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <p className="text-sm leading-6 text-neutral-700">{member.description}</p>
              </div>
            </div>
          ))}

          <div className="bg-cover flex h-full flex-col justify-between rounded-lg p-8 text-white"
          style={{
            backgroundImage: `url(${plantwall})`,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundBlendMode: 'darken',         
          }}>
            <div>
              <h3 className="text-lg font-semibold">{hiringCard.title}</h3>
              <p className="mt-4 text-sm leading-6 text-neutral-200">{hiringCard.description}</p>
            </div>
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              {hiringCard.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ekipa
