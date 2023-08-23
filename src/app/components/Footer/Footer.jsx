import Image from "next/image";
import Link from "next/link";
import footerLogo from "../../../../public/footer/logo-footer.png";
import whatsapp from "../../../../public/footer/whatsapp-icon.svg";
import email from "../../../../public/footer/email-icon.svg";
import instagram from "../../../../public/footer/instagram-icon.svg";
import tiktok from "../../../../public/footer/tiktok-icon.svg";
import youtube from "../../../../public/footer/youtube-icon.svg";

export function Footer() {
  const sectionTitle = "text-white mb-full text-h6 font-footerSemiBold";
  const externalLinkClasses = "flex flex-row gap-2 items-center";
  const ulClasses = "flex flex-row flex-wrap md:flex-col gap-5";
  const separator = "bg-moanackGrey h-[0.05rem] w-full md:hidden";
  const icons = "w-11";

  return (
    <footer className="bg-[#161B27] text-moanackGrey p-full font-footer text-xs">
      <article className="flex flex-col gap-5 md:flex-row flex-nowrap justify-between items-start mb-full">
        <section>
          <Image src={footerLogo} alt="Logo" className="w-80 mb-full" />
          <p className="mb-5">Moanack 2023. Todos los derechos reservados.</p>
          <a href="mailto:consultas@moanack.com" target="_blank">
            consultas@moanack.com
          </a>
        </section>
        <div className={separator} />
        <section>
          <h4 className={sectionTitle}>Moanack</h4>
          <ul className={ulClasses}>
            <li>
              <Link href="/contact">Contáctame</Link>
            </li>
            <li>Términos y condiciones</li>
          </ul>
        </section>
        <div className={separator} />
        <section>
          <h4 className={sectionTitle}>Da Vinci Xi</h4>
          <ul className={ulClasses}>
            <li>Fabricante</li>
          </ul>
        </section>
        <div className={separator} />
        <section>
          <h4 className={sectionTitle}>Recursos</h4>
          <ul className={ulClasses}>
            <li>
              <a href="https://www.youtube.com/@Drmoanack" target="_blank">
                Youtube
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dr.moanack/" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jorge-moanack-61783186/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </section>
        <div className={separator} />
        <section>
          <ul className={ulClasses}>
            <li className={externalLinkClasses}>
              <Image src={whatsapp} alt="WhatsApp Icon" className={icons} />
              <a href="#">+58 000-000.00.00</a>
            </li>
            <li className={externalLinkClasses}>
              <Image src={email} alt="Email Icon" className={icons} />
              <a href="mailto:consultas@moanack.com" target="_blank">
                consultas@moanack.com
              </a>
            </li>
            <li className={externalLinkClasses}>
              <Image src={instagram} alt="Instagram Icon" className={icons} />
              <a href="https://www.instagram.com/dr.moanack/" target="_blank">
                @dr.moanack
              </a>
            </li>
            <li className={externalLinkClasses}>
              <Image src={tiktok} alt="TikTok Icon" className={icons} />
              <a href="https://www.tiktok.com/@drmoanack" target="_blank">
                @drmoanack
              </a>
            </li>
            <li className={externalLinkClasses}>
              <Image src={youtube} alt="YouTube Icon" className={icons} />
              <a href="https://www.youtube.com/@Drmoanack" target="_blank">
                @drmoanack
              </a>
            </li>
          </ul>
        </section>
      </article>
      <article>
        <p className="text-center md:text-left mt-20 md:mt-0">
          Website diseñado y desarrollado por Adenticing Digital Agency
        </p>
      </article>
    </footer>
  );
}
