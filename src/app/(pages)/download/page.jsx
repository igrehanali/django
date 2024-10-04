import Image from "next/image";
import heart from "../../../../public/heart.png";
import chart from "../../../../public/chart.webp";
import defna from "../../../../public/defna.webp";
import jetbrains from "../../../../public/jetbrains_logo.webp";
import platform from "../../../../public/platform.webp";
import SupportTable from "@/components/supportTable";
import FutureTable from "@/components/futureTable";
import PreviousTable from "@/components/previousTable";

const Download = () => {
  return (
    <div className=" w-full bg-white dark:bg-black dark:text-gray-300 text-[#0C4B33]">
      <div className="bg-[#1b8059] text-xl md:text-3xl px-3 md:px-16 font-extralight py-5">
        Download
      </div>
      <div className="w-full md:flex">
        <div className="md:w-[64%] pl-3 sm:pl-5 lg:pl-16 pr-3 lg:pr-10 pb-32">
          <div className="text-3xl font-light mt-12">How to get Django</div>
          <div className="font-custom mt-8 text-lg leading-8">
            Django is available open-source under the{" "}
            <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
              BSD license.
            </span>{" "}
            We recommend using the latest version of Python 3. The last version
            to support Python 2.7 is Django 1.11 LTS. See the{" "}
            <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
              FAQ
            </span>{" "}
            for the Python versions supported by each version of Django. Here’s
            how to get it:
          </div>
          <div className="mt-12">
            <div className="text-2xl font-light">
              Option 1: Get the latest official version
            </div>
            <div className="font-custom mt-6 text-lg leading-8">
              The latest official version is 5.0.7. Read the{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                5.0.7 release notes
              </span>
              , then install it with{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                pip:
              </span>
            </div>
            <div className="font-custom mt-4 text-lg leading-8">
              Linux / macOS:
            </div>
            <div className="mt-4 bg-gray-100 dark:bg-[#181d27] rounded px-6 py-3">
              <span className="text-black dark:text-white font-light">
                python -m pip install Django==5.0.7
              </span>
            </div>
            <div className="font-custom mt-4 text-lg leading-8">Windows:</div>
            <div className="mt-4 bg-gray-100 dark:bg-[#181d27] rounded px-6 py-3">
              <span className="text-black dark:text-white font-light">
                py -m pip install Django==5.0.7
              </span>
            </div>
          </div>
          <div className="mt-12">
            <div className="text-2xl font-light">
              Option 2: Get the release candidate for 5.1
            </div>
            <div className="font-custom mt-6 text-lg leading-8">
              As part of the{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                Django 5.1 development process
              </span>
              , Django 5.1rc1 is available. This release is only for users who
              want to try the new version and help identify remaining bugs
              before the 5.1 release. Please read the{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                5.1 release notes
              </span>{" "}
              before using this package.
            </div>
            <div className="font-custom mt-4 text-lg leading-8">
              Install the release candidate with{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                pip:
              </span>
            </div>
            <div className="mt-4 bg-gray-100 dark:bg-[#181d27] rounded px-6 py-3">
              <span className="text-black dark:text-white font-light">
                pip install --pre django
              </span>
            </div>
          </div>
          <div className="mt-12">
            <div className="text-2xl font-light">
              Option 3: Get the latest development version
            </div>
            <div className="font-custom mt-6 text-lg leading-8">
              The latest and greatest Django version is the one that’s in our
              Git repository (our revision-control system). This is only for
              experienced users who want to try incoming changes and help
              identify bugs before an official release. Get it using this shell
              command, which requires{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                Git:
              </span>
            </div>
            <div className="mt-4 bg-gray-100 dark:bg-[#181d27] rounded px-6 py-3">
              <span className="text-black dark:text-white font-light">
                git clone https://github.com/django/django.git
              </span>
            </div>
            <div className="font-custom mt-6 text-lg leading-8">
              You can also download{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                a gzipped tarball
              </span>{" "}
              of the development version. This archive is updated every time we
              commit code.
            </div>
          </div>
          <div className="mt-12">
            <div className="text-2xl font-light">After you get it</div>
            <div className="font-custom mt-6 text-lg leading-8">
              See the{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                installation guide
              </span>{" "}
              for further instructions. Make sure you read the documentation
              that corresponds to the version of Django you’ve just installed.
            </div>
            <div className="font-custom mt-6 text-lg leading-8">
              And be sure to sign up for the{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                django-users mailing list
              </span>
              , where other Django users and the Django developers themselves
              all hang out to help each other.
            </div>
          </div>
          <div className="mt-12">
            <div className="text-2xl font-light">Supported Versions</div>
            <div className="font-custom mt-6 text-lg leading-8">
              Feature releases (A.B, A.B+1, etc.) will happen roughly every
              eight months. These releases will contain new features,
              improvements to existing features, and such.
            </div>
            <div className="font-custom mt-6 text-lg leading-8">
              Patch releases (A.B.C, etc.) will be issued as needed, to fix bugs
              and/or security issues. These releases will be 100% compatible
              with the associated feature release, unless this is impossible for
              security reasons or to prevent data loss. So the answer to "should
              I upgrade to the latest patch release?” will always be "yes."
            </div>
            <div className="font-custom mt-6 text-lg leading-8">
              Certain feature releases will be designated as long-term support
              (LTS) releases. These releases will get security and data loss
              fixes applied for a guaranteed period of time, typically three
              years.
            </div>
            <div className="font-custom mt-6 text-lg leading-8">
              See the{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                supported versions policy
              </span>{" "}
              for detailed guidelines about what fixes will be backported.
            </div>
          </div>
          <div className="mt-5">
            <Image alt="" className="w-full" src={chart} />
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
          </div>
          <div className="mt-6">
            <SupportTable />
          </div>
          <div className="mt-12">
            <div className="text-2xl font-light mb-5">Future Roadmap</div>
            <FutureTable />
          </div>
          <div className="mt-12">
            <div className="text-2xl font-light mb-5">
              Unsupported previous releases
            </div>
            <div className="font-custom mt-6 text-lg leading-8 mb-5">
              These release series no longer receive security updates or bug
              fixes.
            </div>
            <PreviousTable />
          </div>
          <div className="mt-5 space-y-3">
            <div className="font-custom text-sm leading-8">
              [1] Security fixes, data loss bugs, crashing bugs, major
              functionality bugs in newly-introduced features, and regressions
              from older versions of Django.
            </div>
            <div className="font-custom text-sm">
              [2] Security fixes and data loss bugs.
            </div>
            <div className="font-custom text-sm">
              [3] Last version to support Python 2.7.
            </div>
          </div>
        </div>

        <div className="dark:bg-[#181d27] bg-[#f1f1f1] dark:text-gray-300 text-[#0C4B33] md:w-[36%] pl-3 sm:pl-5 lg:pl-16 pr-5 lg:pr-16 pb-20">
          <div className="mt-8">
            <div className="text-lg">Diamond and Platinum Members</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="flex mt-10 gap-1">
              <div className="w-[30%]">
                <Image alt="" className="h-16 w-16" src={jetbrains} />
              </div>
              <div className="w-[70%]">
                <div className="text-sm font-semibold">JetBrains</div>
                <div className="text-[#95d5bb] hover:text-[#60c29b] text-xs mt-3 leading-5 cursor-pointer">
                  PyCharm is the Python IDE for Professional Developers by
                  JetBrains providing a complete set of tools for productive
                  Python, Web and scientific development.
                </div>
              </div>
            </div>
            <div className="flex mt-10 gap-1">
              <div className="w-[30%]">
                <Image alt="" className="h-16 w-16" src={defna} />
              </div>
              <div className="w-[70%]">
                <div className="text-sm font-semibold">DEFNA</div>
                <div className="text-[#95d5bb] hover:text-[#60c29b] text-xs mt-3 leading-5 cursor-pointer">
                  DEFNA is a non-profit organization that hosts Django events in
                  North America. They have produced DjangoCon US since 2015.
                </div>
              </div>
            </div>
            <div className="flex mt-10 gap-1">
              <div className="w-[30%]">
                <Image alt="" className=" w-20" src={platform} />
              </div>
              <div className="w-[70%]">
                <div className="text-sm font-semibold">Platform.sh</div>
                <div className="text-[#95d5bb] hover:text-[#60c29b] text-xs mt-3 leading-5 cursor-pointer">
                  Build your greatest-ever Django app. Platform.sh is a unified,
                  secure, enterprise-grade platform for building, running and
                  scaling fleets of applications.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="text-lg">Support Django</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="flex mt-10 gap-1">
              <div className="w-[30%]">
                <Image alt="" className="h-20 w-20" src={heart} />
              </div>
              <div className="text-[#95d5bb] hover:text-[#60c29b] text-sm w-[70%] leading-6 cursor-pointer">
                TWMO donated to the Django Software Foundation to support Django
                development. Donate today!
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-lg">For the impatient:</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Latest release:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Release notes:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Online documentation
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Latest release:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Release notes:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Online documentation
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-lg">Which version is better?</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="text-sm leading-5 mt-5 font-light">
              We improve Django almost every day and are pretty good about
              keeping the code stable. Thus, using the latest development code
              is a safe and easy way to get access to new features as they’re
              added. If you choose to follow the development version, keep in
              mind that there will occasionally be backwards-incompatible
              changes. You’ll want to pay close attention to the commits by
              watching{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                Django on GitHub{" "}
              </span>{" "}
              or subscribing to{" "}
              <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                {" "}
                django-updates.
              </span>
            </div>
            <div className="text-sm leading-5 mt-5 font-light">
              If you’re just looking for a stable deployment target and don’t
              mind waiting for the next release, you’ll want to stick with the
              latest official release (which will always include detailed notes
              on any changes you’ll need to make while upgrading).
            </div>
          </div>
          <div className="mt-10">
            <div className="text-lg">Previous releases</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Latest release:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Release notes:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Online documentation
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Latest release:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Release notes:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Online documentation
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-lg">Unsupported previous releases (no longer receive security updates or bug fixes)</div>
            <div className="h-[1px] bg-gray-300 dark:bg-white mt-3"></div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.1.13:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                     Django-4.1.13.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.0.10:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.1.13:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                     Django-4.1.13.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.0.10:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.1.13:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                     Django-4.1.13.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.0.10:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.1.13:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                     Django-4.1.13.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.0.10:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.1.13:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                     Django-4.1.13.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.0.10:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.1.13:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                     Django-4.1.13.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.0.10:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.1.13:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                     Django-4.1.13.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.0.10:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.1.13:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                     Django-4.1.13.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.0.10:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.1.13:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                     Django-4.1.13.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.0.10:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.1.13:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                     Django-4.1.13.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.0.10:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 font-light">
              <div className="font-black text-xl mt-3">.</div>
              <div className="text-sm mt-5 space-y-1">
                <div className="flex gap-1">
                  <span>Django 4.1.13:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                     Django-4.1.13.tar.gz
                  </span>
                </div>
                <div className="flex gap-1">
                  <span>Checksums:</span>
                  <span className="text-[#5ab591] dark:text-[#95d5bb] hover:text-[#b8dacd] cursor-pointer underline">
                    Django-5.0.7.checksum.txt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
