// import { BigInt } from "@graphprotocol/graph-ts";
import { RelayerRegistered } from "../generated/RelayerRegistry/RelayerRegistry";
import { Relayer } from "../generated/schema";

export function handleRelayerRegistered(event: RelayerRegistered): void {
  let relayer = new Relayer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  relayer.ensHash = event.params.relayer;
  relayer.ensName = event.params.ensName;
  relayer.address = event.params.relayerAddress;
  relayer.blockRegistration = event.block.number;
  relayer.save();
}
