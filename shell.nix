let
  sources = import ./nix/sources.nix;
  pkgs = import sources.nixpkgs {};
in
  (import ./default.nix { inherit pkgs; }).shell
