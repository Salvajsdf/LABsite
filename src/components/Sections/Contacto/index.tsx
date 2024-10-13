import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { FC, memo } from 'react';

import { contact, SectionId } from '../../../data/data';
import { ContactType, ContactValue } from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
import ContactForm from './ContactForm';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: { Icon: EnvelopeIcon, srLabel: 'Email' },
  [ContactType.Phone]: { Icon: DevicePhoneMobileIcon, srLabel: 'Phone' },
  [ContactType.Location]: { Icon: MapPinIcon, srLabel: 'Location' },
  [ContactType.Github]: { Icon: GithubIcon, srLabel: 'Github' },
  [ContactType.LinkedIn]: { Icon: LinkedInIcon, srLabel: 'LinkedIn' },
  [ContactType.Facebook]: { Icon: FacebookIcon, srLabel: 'Facebook' },
  [ContactType.Twitter]: { Icon: TwitterIcon, srLabel: 'Twitter' },
  [ContactType.Instagram]: { Icon: InstagramIcon, srLabel: 'Instagram' },
};

const Contact: FC = memo(() => {
  const { headerText, description, items } = contact;
  return (
    <Section className="bg-white" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <EnvelopeIcon className="hidden h-16 w-16 text-neutral-800 md:block" />
          <h2 className="text-2xl font-bold text-black">{headerText}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="order-2 col-span-1 md:order-1">
            <ContactForm />
          </div>
          <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
            <p className="prose leading-6 text-black">{description}</p>
            <dl className="flex flex-col space-y-4 text-base text-neutral-800 sm:space-y-2">
              {items.map(({ type, text, href }) => {
                const { Icon, srLabel } = ContactValueMap[type];
                return (
                  <div key={srLabel}>
                    <dt className="sr-only">{srLabel}</dt>
                    <dd className="flex items-center">
                      <a
                        className={classNames(
                          '-m-2 flex items-center p-2 text-black hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500', // Cambiado para que solo el texto cambie a naranja
                        )}
                        href={href}
                        target="_blank"
                      >
                        <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-800 sm:h-5 sm:w-5" />
                        <span className="ml-3 text-sm sm:text-base">{text}</span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;