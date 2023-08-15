import Image from "next/image";
import footerLogo from "../../../../public/footer/logo-footer.png";
import whatsapp from "../../../../public/footer/whatsapp-icon.svg";
import email from "../../../../public/footer/email-icon.svg";
import instagram from "../../../../public/footer/instagram-icon.svg";
import tiktok from "../../../../public/footer/tiktok-icon.png";
import youtube from "../../../../public/footer/youtube-icon.svg";

export function Footer() {
  const sectionTitle = "text-white font-bold mb-full";
  const externalLinkClasses = "flex flex-row gap-2 items-center";
  const ulClasses = "flex flex-col gap-2";

  return (
    <footer className="bg-[#161B27] text-moanackGrey p-full font-footer text-xs">
      <article className="flex flex-row flex-nowrap justify-between items-start mb-full">
        <section>
          <Image src={footerLogo} alt="Logo" />
          <p>Moanack 2023. Todos los derechos reservados.</p>
          <a href="mailto:consultas@moanack.com" target="_blank">
            consultas@moanack.com
          </a>
        </section>
        <section>
          <h4 className={sectionTitle}>Moanack</h4>
          <ul className={ulClasses}>
            <li>Contáctame</li>
            <li>Política de privacidad</li>
            <li>Términos y condiciones</li>
            <li>Política de seguridad</li>
          </ul>
        </section>
        <section>
          <h4 className={sectionTitle}>Da Vinci Xi</h4>
          <ul className={ulClasses}>
            <li>Fabricante</li>
            <li>Casos estudios</li>
          </ul>
        </section>
        <section>
          <h4 className={sectionTitle}>Recursos</h4>
          <ul className={ulClasses}>
            <li>Blog</li>
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
        <section>
          <ul className={ulClasses}>
            <li className={externalLinkClasses}>
              <Image src={whatsapp} alt="WhatsApp Icon" />
              <a href="#">+58 000-000.00.00</a>
            </li>
            <li className={externalLinkClasses}>
              <Image src={email} alt="Email Icon" />
              <a href="mailto:consultas@moanack.com" target="_blank">
                consultas@moanack.com
              </a>
            </li>
            <li className={externalLinkClasses}>
              <Image src={instagram} alt="Instagram Icon" />
              <a href="https://www.instagram.com/dr.moanack/" target="_blank">
                @dr.moanack
              </a>
            </li>
            <li className={externalLinkClasses}>
              <Image src={tiktok} alt="TikTok Icon" />
              <a href="https://www.tiktok.com/@drmoanack" target="_blank">
                @drmoanack
              </a>
            </li>
            <li className={externalLinkClasses}>
              <Image src={youtube} alt="YouTube Icon" />
              <a href="https://www.youtube.com/@Drmoanack" target="_blank">
                @drmoanack
              </a>
            </li>
          </ul>
        </section>
      </article>
      <article>
        <p>Website diseñado y desarrollado por Adenticing Digital Agency</p>
      </article>
    </footer>
  );
}
