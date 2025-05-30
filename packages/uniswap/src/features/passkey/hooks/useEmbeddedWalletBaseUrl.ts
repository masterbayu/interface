import { UNISWAP_WEB_URL } from 'uniswap/src/constants/urls'
import { DynamicConfigs, EmbeddedWalletConfigKey } from 'uniswap/src/features/gating/configs'
import { useDynamicConfigValue } from 'uniswap/src/features/gating/hooks'

export function useEmbeddedWalletBaseUrl(): string {
  const baseUrl = useDynamicConfigValue<DynamicConfigs.EmbeddedWalletConfig, EmbeddedWalletConfigKey.BaseUrl, string>(
    DynamicConfigs.EmbeddedWalletConfig,
    EmbeddedWalletConfigKey.BaseUrl,
    UNISWAP_WEB_URL,
  )

  return baseUrl
}
