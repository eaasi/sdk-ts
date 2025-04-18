#!/bin/sh -e

# A workaround for exporting ESM distribution:
# https://nodejs.org/en/learn/modules/publishing-a-package#publish-both-full-cjs--esm-distributions
# https://nodejs.org/en/learn/modules/publishing-a-package#gotchas

exec cat <<EOT
{
  "type": "module"
}
EOT
