{ pkgs }: 
{
  package = pkgs.mkYarnPackage {
    name = "blog";
    src = ./.;
    packageJSON = ./package.json;
    yarnLock = ./yarn.lock;
    yarnNix = ./yarn.nix;
  };
}
