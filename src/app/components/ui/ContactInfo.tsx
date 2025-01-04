interface ContactPerson {
    fonction: string
    name: string
    tel: string
    email: string
  }
  
  export const ContactInfo = () => {
    const contacts: ContactPerson[] = [
      {
        fonction: "Directeur technique",
        name: "M. Bruno DEBOFFLE",
        tel: "06 89 77 63 64",
        email: "brunodeboffle@sfr.fr"
      },
      {
        fonction: "Président",
        name: "M. Jean-Paul GRAVALLON",
        tel: "06 15 47 82 99",
        email: "gravallon.jeanpaul@neuf.fr"
      },
      {
        fonction: "Secrétariat – Inscriptions",
        name: "M. Romain MOREAU",
        tel: "06 49 23 40 95",
        email: "scaelin@hotmail.com"
      }
    ]
  
    return (
      <div className="contact-info space-y-8 text-[#A68A72]">
        {contacts.map((contact, index) => (
          <div key={index} className="mb-6">
            <div className="text-2xl font-open-sans underline pt-5 pl-10">
              {contact.fonction}
            </div>
            <div className="font-open-sans pl-10 pt-1 text-[#0d0000]">
              {contact.name}
            </div>
            <div className="text-open-sans pl-10 pt-1 text-[#0d0000]">
              Tél – SMS : {contact.tel} - E-Mail : {' '}
              <a 
                href={`mailto:${contact.email}`}
                className="text-lg text-[#f3b705] hover:text-[#A68A72]"
              >
                {contact.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }